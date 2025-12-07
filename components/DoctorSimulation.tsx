import React from 'react';
import { Activity, Lightbulb, Stethoscope, MessageCircle } from 'lucide-react';

const DoctorSimulation: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-sans">
            {/* Header */}
            <div className="bg-[#0f172a] p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                        <Activity className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg leading-none">პაციენტი: ნიკა</h3>
                        <span className="text-gray-400 text-xs">ტრიაჟის დონე 3</span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-white text-sm transition-colors">
                    გასვლა
                </button>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8 bg-[#1e293b] relative min-h-[400px] flex flex-col items-center justify-center gap-8">

                {/* Patient Avatar & Bubble */}
                <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
                    <div className="w-20 h-20 rounded-full bg-gray-700 border-4 border-gray-600 flex items-center justify-center text-4xl shadow-xl relative">
                        😷
                    </div>

                    <div className="relative bg-[#283548] p-6 rounded-2xl border border-white/5 shadow-lg w-full text-center">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#283548] rotate-45 border-t border-l border-white/5"></div>
                        <div className="absolute -top-4 -left-4 bg-red-500 rounded-full p-1.5 shadow-lg">
                            <MessageCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-xl text-gray-200 italic font-medium">
                            "ძალიან დაღლილი ვარ და ყელი მტკივა, კისერზე რაღაც პატარა ბურთულებიც ამომივიდა."
                        </p>
                    </div>
                </div>

                {/* Symptom Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    {['ძლიერი დაღლილობა', 'ყელის ტკივილი', 'გადიდებული ლიმფური კვანძები კისერზე'].map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-200 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Doctor's Hint */}
                <div className="w-full max-w-2xl bg-[#2a1820] border border-red-500/20 rounded-xl p-4 flex gap-4 items-start">
                    <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                        <p className="text-red-200 text-sm font-bold mb-1">ექიმის რჩევა</p>
                        <p className="text-gray-400 text-sm italic">"ყურადღებით მოუსმინე პაციენტს, ხშირად დიაგნოზის ნახევარი უკვე პაციენტის სიტყვებშია."</p>
                    </div>
                </div>

            </div>

            {/* Footer - Diagnosis Selection */}
            <div className="bg-[#283548] p-6 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <Stethoscope className="w-5 h-5" />
                    <span className="font-medium">აირჩიე დიაგნოზი</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: 'მონონუკლეოზი', correct: true },
                        { name: 'გაციება', correct: false },
                        { name: 'სტრეპტოკოკული ანგინა', correct: false }
                    ].map((diagnosis, i) => (
                        <div key={i} className="bg-[#334155] hover:bg-[#3e4c63] border border-white/10 hover:border-white/20 rounded-lg p-4 cursor-pointer transition-all group">
                            <h4 className="text-white font-bold text-lg mb-1">{diagnosis.name}</h4>
                            <span className="text-xs text-gray-400 group-hover:text-gray-300">დიაგნოზის დადასტურება</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorSimulation;
