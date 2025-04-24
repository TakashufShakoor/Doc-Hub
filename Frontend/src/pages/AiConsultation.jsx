import { useState } from "react";
import { assets } from "../assets/assets";

const AiConsultation = () => {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setDiagnosis(null);

 
    setTimeout(() => {
      setDiagnosis("Based on your symptoms, possible conditions include flu, cold, or viral infection. Consult a doctor for an accurate diagnosis.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 ">
      <div className="w-full max-w-2xl p-6 border shadow-xl rounded-xl ">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">AI Health Consultation</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Enter your symptoms, and our AI will analyze them to provide possible diagnoses.</p>
        <textarea
          className="w-full p-3 border rounded-md"
          placeholder="Describe your symptoms..."
          rows={10}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-primary text-white py-2 mt-4 rounded hover:opacity-80 flex items-center justify-center transition-all"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span> : "Analyze Symptoms"}
        </button>
        {diagnosis && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-md">
            <h3 className="text-lg font-medium text-green-700">Possible Diagnosis</h3>
            <p className="text-sm text-gray-700 mt-2">{diagnosis}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiConsultation;
