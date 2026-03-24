import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/data/features";
import SupportCallCTA from "@/components/SupportCallCTA";

const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const navigate = useNavigate();

  let foundFeature = null;
  let foundCategory = null;
  for (const cat of categories) {
    const f = cat.features.find((ft) => ft.id === featureId);
    if (f) {
      foundFeature = f;
      foundCategory = cat;
      break;
    }
  }

  if (!foundFeature || !foundCategory) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Feature Not Found</h2>
          <button onClick={() => navigate("/")} className="text-primary underline">Go back</button>
        </div>
      </div>
    );
  }

  const Icon = foundFeature.icon;
  const CatIcon = foundCategory.icon;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Overview
        </button>
        <span>/</span>
        <span className={`flex items-center gap-1 ${foundCategory.colorClass}`}>
          <CatIcon className="w-3.5 h-3.5" />
          {foundCategory.title}
        </span>
        <span>/</span>
        <span className="text-foreground font-medium">{foundFeature.title}</span>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${foundCategory.iconBg} ${foundCategory.colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{foundFeature.title}</h1>
        <p className="text-lg text-muted-foreground mb-4">{foundFeature.titleHi}</p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">{foundFeature.description}</p>
      </motion.div>

      {/* Steps */}
      <div className="space-y-12">
        {foundFeature.steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            {index < foundFeature.steps.length - 1 && (
              <div className="absolute left-5 top-12 bottom-0 w-px bg-border -mb-12" />
            )}

            <div className="flex items-start gap-4 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${foundCategory.iconBg} ${foundCategory.colorClass} border-2 border-current/20 relative z-10`}>
                {index + 1}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>

            {step.screenshot && (
              <div className="ml-14 rounded-xl overflow-hidden border border-border shadow-lg bg-card">
                <img
                  src={step.screenshot}
                  alt={`Step ${index + 1}: ${step.title}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Support CTA */}
      <div className="mt-16">
        <SupportCallCTA />
      </div>
    </div>
  );
};

export default FeatureDetailPage;
