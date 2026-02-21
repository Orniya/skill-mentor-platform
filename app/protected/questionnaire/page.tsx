import { QuestionnaireForm } from "@/components/questionnaire/questionnaire-form";

export default function QuestionnairePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Get your recommendation
      </h1>
      <QuestionnaireForm />
    </div>
  );
}
