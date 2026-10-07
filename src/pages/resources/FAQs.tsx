import PageSeoHead from "@/components/PageSeoHead";
import FinalCTASection from "@/components/FinalCTASection";
import { FaqSection } from "@/components/ui/faq-section";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="text-trust-blue font-semibold bg-trust-blue/10 px-1 rounded">
          {part}
        </span>
      ) : part
    );
  };

  const faqCategories = [
    {
      category: "Data Access & Security",
      questions: [
        {
          question: "Who has access to my data?",
          answer: "Only you have access to your data. It's all kept on your own servers."
        },
        {
          question: "Does CollabAI have access to my data?",
          answer: "CollabAI is a self-hosted platform powered by OpenAI, Anthropic, and Gemini. All your data remains on your own server, and since you use your own API keys, you have full control over your data."
        },
        {
          question: "Do I need to share any credentials during CollabAI installation on my server?",
          answer: "To ensure a smooth setup and configuration process, we kindly request that you share certain credentials and information with us using Zoho Vault. This is a secure platform for sharing credentials, ensuring that we won't be able to see them. Once the necessary setup is complete, you can withdraw access at any time. Alternatively, if you're technically inclined, we can provide guidance so you can follow the instructions and perform the necessary setups yourself."
        }
      ]
    },
    {
      category: "Support & Service",
      questions: [
        {
          question: "Is there assistance available for agent creation?",
          answer: "Yes! You can consult with our AI experts to help build your custom AI solutions and Agents."
        },
        {
          question: "Will I get support from the CollabAI team?",
          answer: "You will receive support from the CollabAI team. Here's what you can expect: 1. You'll receive updates for stable released versions only. Beta or experimental features are excluded unless agreed upon by both parties. 2. Any bugs resulting from software updates will be fixed within 15 business days. Critical bugs will be prioritized based on severity. 3. Updates are provided for one year. After this period, additional costs may apply for further updates, subject to a new agreement."
        },
        {
          question: "What if I want to pause the Project?",
          answer: "You can pause the project setup at any time. If you decide not to continue with our services, we will refund the amount. However, if you choose to resume later, please note that the resumption of work may not be immediate. We will inform you of the new deadline for setup completion once work resumes."
        }
      ]
    },
    {
      category: "Usage & Customization",
      questions: [
        {
          question: "How do I know how many tokens my users will get?",
          answer: "You can set a maximum token limit for all users and also customize the number for individual users."
        },
        {
          question: "Can anyone contribute to CollabAI?",
          answer: "Yes, anyone can contribute. Simply visit the <a href='https://github.com/sjinnovation/CollabAI/blob/main/CONTRIBUTING.md' target='_blank' rel='noopener noreferrer' className='text-trust-blue hover:text-[#315efd] underline'>GitHub Contributing Guide</a> to get started with contributing."
        },
        {
          question: "Why should I invest in CollabAI?",
          answer: "You just need to make one initial investment, and enjoy the long-term benefits for life! This initial investment will ensure your data privacy, a personalized customization experience."
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      <PageSeoHead
        title="FAQs – CollabAI Frequently Asked Questions"
        description="Get answers to common questions about CollabAI's self-hosted AI platform, data security, support, pricing, and customization options."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqCategories.flatMap(cat => cat.questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": { "@type": "Answer", "text": q.answer }
          })))
        }}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Questions
              </span>
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed mb-8">
              Get answers to common questions about AI implementation, security, compliance, 
              and what to expect when working with CollabAI.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-secondary w-5 h-5" />
              <Input 
                placeholder="Search FAQs..."
                className="pl-10 py-3 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          {filteredCategories.map((category, categoryIndex) => (
            <FaqSection
              key={categoryIndex}
              title={category.category}
              items={category.questions}
              className="py-4"
            />
          ))}
        </div>
      </section>

      <FinalCTASection 
        title="Still Have Questions?"
        paragraph="Our team of AI and industry experts is here to help you understand how CollabAI can transform your specific workflows."
        button1Text="Schedule a Call"
        button2Text="Email Our Experts"
        button1Link="/contact"
        button2Link="/contact"
      />

    </div>
  );
};

export default FAQs;