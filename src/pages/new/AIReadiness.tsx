import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Sparkles } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AI_READINESS_MULTI_SELECT_MAX_SCORING,
  AI_READINESS_QUESTIONS,
  type AiReadinessOption,
  type AiReadinessQuestion,
  type AiReadinessQuestionId,
} from "../../../supabase/functions/_shared/aiReadiness";

type AnswerValue = AiReadinessOption | AiReadinessOption[];
type Answers = Partial<Record<AiReadinessQuestionId, AnswerValue>>;

type Details = {
  name: string;
  email: string;
  companyName: string;
  website: string;
  industry: string;
  teamSize: string;
};

const QUESTIONS: AiReadinessQuestion[] = AI_READINESS_QUESTIONS;

const initialDetails: Details = {
  name: "",
  email: "",
  companyName: "",
  website: "",
  industry: "",
  teamSize: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DETAILS_FIELDS: Array<{ key: keyof Details; label: string; placeholder: string; type?: string }> = [
  { key: "name", label: "Name", placeholder: "Jane Doe" },
  { key: "email", label: "Email", placeholder: "jane@company.com", type: "email" },
  { key: "companyName", label: "Company name", placeholder: "Acme Inc." },
  { key: "website", label: "Website", placeholder: "www.acme.com", type: "text" },
  { key: "industry", label: "Industry", placeholder: "Healthcare" },
  { key: "teamSize", label: "Team size", placeholder: "25", type: "number" },
];

const AIReadiness = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [details, setDetails] = useState<Details>(initialDetails);
  const [questionError, setQuestionError] = useState("");
  const [detailErrors, setDetailErrors] = useState<Partial<Record<keyof Details, string>>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [generatedReportUrl, setGeneratedReportUrl] = useState<string | null>(null);
  const [submittedPayload, setSubmittedPayload] = useState<{
    answers: Answers;
    details: Details;
    totalScore: number;
    reportPath?: string;
  } | null>(null);

  const totalSteps = QUESTIONS.length + 1;
  const isQuestionStep = currentStep < QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentStep];
  const currentAnswer = isQuestionStep ? answers[currentQuestion.id] : undefined;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  const getAnswerScore = (questionId: AiReadinessQuestionId, answer: AnswerValue | undefined) => {
    if (!answer) return 0;
    if (Array.isArray(answer)) {
      if (AI_READINESS_MULTI_SELECT_MAX_SCORING.has(questionId)) {
        return answer.length > 0 ? Math.max(...answer.map((option) => option.score)) : 0;
      }
      return answer.reduce((sum, option) => sum + option.score, 0);
    }
    return answer.score;
  };

  const totalScore = useMemo(
    () =>
      QUESTIONS.reduce(
        (sum, question) => sum + getAnswerScore(question.id, answers[question.id]),
        0,
      ),
    [answers],
  );

  const firstName = useMemo(() => {
    const trimmed = details.name.trim();
    if (!trimmed) return "there";
    return trimmed.split(/\s+/)[0];
  }, [details.name]);

  const onPickAnswer = (questionId: AiReadinessQuestionId, option: AiReadinessOption) => {
    const question = QUESTIONS.find((item) => item.id === questionId);

    setAnswers((prev) => {
      if (!question?.multiSelect) {
        return { ...prev, [questionId]: option };
      }

      const existing = prev[questionId];
      const selected = Array.isArray(existing) ? existing : [];
      const isAlreadySelected = selected.some((item) => item.label === option.label);

      return {
        ...prev,
        [questionId]: isAlreadySelected
          ? selected.filter((item) => item.label !== option.label)
          : [...selected, option],
      };
    });
    setQuestionError("");
  };

  const validateDetails = () => {
    const nextErrors: Partial<Record<keyof Details, string>> = {};

    DETAILS_FIELDS.forEach((field) => {
      if (!details[field.key].trim()) {
        nextErrors[field.key] = `${field.label} is required`;
      }
    });

    if (details.email.trim() && !EMAIL_REGEX.test(details.email.trim())) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (details.website.trim()) {
      try {
        const normalized = /^https?:\/\//.test(details.website.trim())
          ? details.website.trim()
          : `https://${details.website.trim()}`;
        const websiteUrl = new URL(normalized);
        if (!websiteUrl.hostname.includes(".")) {
          nextErrors.website = "Please enter a valid website URL";
        }
      } catch {
        nextErrors.website = "Please enter a valid website URL";
      }
    }

    if (details.teamSize.trim() && !/^\d+$/.test(details.teamSize.trim())) {
      nextErrors.teamSize = "Team size must be a number";
    }

    setDetailErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onNext = () => {
    if (!isQuestionStep) return;
    const hasSelected =
      Array.isArray(currentAnswer) ? currentAnswer.length > 0 : Boolean(currentAnswer);

    if (!hasSelected) {
      setQuestionError("Please select one option to continue.");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (currentStep === 0 || isComplete) return;
    setQuestionError("");
    setCurrentStep((prev) => prev - 1);
  };

  const onDetailsSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateDetails()) return;

    setSubmitError("");
    setIsSubmittingReport(true);

    const apiAnswers = QUESTIONS.reduce<Record<AiReadinessQuestionId, string | string[]>>((acc, question) => {
      const answer = answers[question.id];
      if (Array.isArray(answer)) {
        acc[question.id] = answer.map((item) => item.label);
      } else {
        acc[question.id] = answer?.label ?? "";
      }
      return acc;
    }, {} as Record<AiReadinessQuestionId, string | string[]>);

    const payload = {
      answers,
      details,
      totalScore,
    };

    try {
      const normalizedWebsite = /^https?:\/\//i.test(details.website.trim())
        ? details.website.trim()
        : `https://${details.website.trim()}`;

      const { data, error } = await supabase.functions.invoke("generate-ai-readiness-report", {
        body: {
          details: {
            ...details,
            website: normalizedWebsite,
            teamSize: Number(details.teamSize),
          },
          answers: apiAnswers,
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to generate report.");
      }

      setGeneratedReportUrl(data?.signedUrl ?? null);
      setSubmittedPayload({
        ...payload,
        reportPath: data?.storagePath,
      });
      setIsComplete(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong while generating the report.");
    } finally {
      setIsSubmittingReport(false);
    }
  };

  return (
    <ProductPageShell
      seo={{
        title: "AI Readiness — Quick Assessment",
        description:
          "Answer 7 guided questions and share your business details to prepare your AI readiness assessment.",
        canonicalPath: "/ai-readiness",
      }}
      eyebrow="AI Readiness"
      h1="Discover your AI readiness in minutes."
      sub="Move step-by-step through 7 questions, then share a few business details so we can prepare the right recommendations."
      ctas={[{ label: "Start assessment", url: "#ai-readiness-form" }]}
    >
      <section id="ai-readiness-form" className="bg-background pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
            {!isComplete && (
              <>
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
                      Step {currentStep + 1} of {totalSteps}
                    </span>
                    <span>{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <motion.div
                      className="h-2 rounded-full bg-[hsl(var(--brand-secondary))]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isQuestionStep ? (
                    <motion.div
                      key={`question-${currentQuestion.id}`}
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.28 }}
                    >
                      <h2 className="text-2xl font-bold text-brand-primary">{currentQuestion.title}</h2>
                      {currentQuestion.helper && (
                        <p className="mt-2 text-sm text-muted-foreground">{currentQuestion.helper}</p>
                      )}

                      <div className="mt-5 space-y-3">
                        {currentQuestion.options.map((option) => {
                          const selected = Array.isArray(currentAnswer)
                            ? currentAnswer.some((item) => item.label === option.label)
                            : currentAnswer?.label === option.label;
                          return (
                            <button
                              key={option.label}
                              type="button"
                              onClick={() => onPickAnswer(currentQuestion.id, option)}
                              className={`w-full rounded-xl border p-4 text-left transition-all ${
                                selected
                                  ? "border-[hsl(var(--brand-secondary)/0.55)] bg-[hsl(var(--brand-secondary)/0.12)] text-foreground shadow-sm"
                                  : "border-border bg-background text-foreground hover:border-[hsl(var(--brand-secondary)/0.4)] hover:bg-[hsl(var(--brand-secondary)/0.06)]"
                              }`}
                              aria-pressed={selected}
                            >
                              <span className="flex items-start gap-3">
                                {selected ? (
                                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green-500" />
                                ) : (
                                  <Circle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted-foreground" />
                                )}
                                <span className="block text-sm font-medium">{option.label}</span>
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {questionError ? (
                        <p className="mt-3 text-sm text-destructive">
                          {currentQuestion.multiSelect
                            ? "Please select at least one option to continue."
                            : questionError}
                        </p>
                      ) : null}
                    </motion.div>
                  ) : (
                    <motion.form
                      key="details-step"
                      onSubmit={onDetailsSubmit}
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.28 }}
                    >
                      <h2 className="text-2xl font-bold text-brand-primary">Final step: your details</h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Please complete all fields. We will use these details for your personalized report next.
                      </p>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {DETAILS_FIELDS.map((field) => (
                          <div key={field.key} className="space-y-1.5">
                            <Label htmlFor={field.key}>{field.label} *</Label>
                            <Input
                              id={field.key}
                              type={field.type ?? "text"}
                              value={details[field.key]}
                              placeholder={field.placeholder}
                              min={field.key === "teamSize" ? 1 : undefined}
                              onChange={(event) => {
                                const value =
                                  field.key === "teamSize"
                                    ? event.target.value.replace(/[^\d]/g, "")
                                    : event.target.value;
                                setDetails((prev) => ({ ...prev, [field.key]: value }));
                                if (detailErrors[field.key]) {
                                  setDetailErrors((prev) => ({ ...prev, [field.key]: "" }));
                                }
                              }}
                              aria-invalid={Boolean(detailErrors[field.key])}
                            />
                            {detailErrors[field.key] ? (
                              <p className="text-xs text-destructive">{detailErrors[field.key]}</p>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button type="button" variant="outline" onClick={onBack}>
                          <ArrowLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        <Button type="submit" disabled={isSubmittingReport}>
                          {isSubmittingReport ? "Generating report..." : "Submit assessment"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                      {submitError ? <p className="mt-3 text-sm text-destructive">{submitError}</p> : null}
                    </motion.form>
                  )}
                </AnimatePresence>

                {isQuestionStep && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button type="button" variant="outline" onClick={onBack} disabled={currentStep === 0}>
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button type="button" onClick={onNext}>
                      Next question
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}

            {isComplete && submittedPayload && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-[hsl(var(--brand-secondary)/0.35)] bg-gradient-to-br from-[hsl(var(--brand-secondary)/0.08)] via-background to-[hsl(var(--brand-secondary)/0.03)] p-6 text-left shadow-sm sm:p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--brand-secondary)/0.15)]">
                  <CheckCircle2 className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-brand-primary sm:text-3xl">
                  Thank You {firstName}, Your AI Readiness Report Is Being Prepared
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We’ve received your responses and are preparing your personalized AI Readiness Report for{" "}
                  <span className="font-semibold text-foreground">{submittedPayload.details.companyName}</span>.
                </p>

                <div className="mt-6 rounded-xl border border-border/70 bg-background/85 p-4">
                  <p className="text-sm font-semibold text-brand-primary">Your report will include:</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>Your AI readiness score</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>Your top 3 findings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>A personalized industry insight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>One practical recommendation for where to start with AI</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-5 text-sm text-muted-foreground sm:text-base">
                  We’ll send the report to{" "}
                  <span className="font-semibold text-foreground">{submittedPayload.details.email}</span> shortly.
                </p>
                {generatedReportUrl ? (
                  <a
                    href={generatedReportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-secondary))] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Download report PDF
                  </a>
                ) : null}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </ProductPageShell>
  );
};

export default AIReadiness;
