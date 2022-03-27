import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

const App = () => {

  const symptoms=[
"itching",
"skin_rash",
"nodal_skin_eruptions",
"continuous_sneezing",
"shivering",
"chills",
"joint_pain",
"stomach_pain",
"acidity",
"ulcers_on_tongue",
"muscle_wasting",
"vomiting",
"burning_micturition",
"spotting_urination",
"fatigue",
"weight_gain",
"anxiety",
"cold_hands_and_feets",
"mood_swings",
"weight_loss",
"restlessness",
"lethargy",
"patches_in_throat",
"irregular_sugar_level",
"cough",
"high_fever",
"sunken_eyes",
"breathlessness",
"sweating",
"dehydration",
"indigestion",
"headache",
"yellowish_skin",
"dark_urine",
"nausea",
"loss_of_appetite",
"pain_behind_the_eyes",
"back_pain",
"constipation",
"abdominal_pain",
"diarrhoea",
"mild_fever",
"yellow_urine",
"yellowing_of_eyes",
"acute_liver_failure",
"fluid_overload",
"swelling_of_stomach",
"swelled_lymph_nodes",
"malaise",
"blurred_and_distorted_vision",
"phlegm",
"throat_irritation",
"redness_of_eyes",
"sinus_pressure",
"runny_nose",
"congestion",
"chest_pain",
"weakness_in_limbs",
"fast_heart_rate",
"pain_during_bowel_movements",
"pain_in_anal_region",
"bloody_stool",
"irritation_in_anus",
"neck_pain",
"dizziness",
"cramps",
"bruising",
"obesity",
"swollen_legs",
"swollen_blood_vessels",
"puffy_face_and_eyes",
"enlarged_thyroid",
"brittle_nails",
"swollen_extremeties",
"excessive_hunger",
"extra_marital_contacts",
"drying_and_tingling_lips",
"slurred_speech",
"knee_pain",
"hip_joint_pain",
"muscle_weakness",
"stiff_neck",
"swelling_joints",
"movement_stiffness",
"spinning_movements",
"loss_of_balance",
"unsteadiness",
"weakness_of_one_body_side",
"loss_of_smell",
"bladder_discomfort",
"foul_smell_ofurine",
"continuous_feel_of_urine",
"passage_of_gases",
"internal_itching",
"toxic_look_(typhos)",
"depression",
"irritability",
"muscle_pain",
"altered_sensorium",
"red_spots_over_body",
"belly_pain",
"abnormal_menstruation",
"dischromic_patches",
"watering_from_eyes",
"increased_appetite",
"polyuria",
"family_history",
"mucoid_sputum",
"rusty_sputum",
"lack_of_concentration",
"visual_disturbances",
"receiving_blood_transfusion",
"receiving_unsterile_injections",
"coma",
"stomach_bleeding",
"distention_of_abdomen",
"history_of_alcohol_consumption",
"fluid_overload",
"blood_in_sputum",
"prominent_veins_on_calf",
"palpitations",
"painful_walking",
"pus_filled_pimples",
"blackheads",
"scurring",
"skin_peeling",
"silver_like_dusting",
"small_dents_in_nails",
"inflammatory_nails",
"blister",
"red_sore_around_nose",
"yellow_crust_ooze",
"prognosis"
]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { speak } = useSpeechSynthesis();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handle=(str)=>{
    const yoursymptoms=symptoms.filter((symptom)=>{
    return str.includes(symptom.replace(/_/g," "));
    })

    console.log(yoursymptoms); //symptoms goes to backend

    const disease="cancer"; //disease name comes from backend

    speak({text:`You are suffering from ${disease}. Reach out your nearest doctor as soon as possible.`})
  }

  return (
    <div>
      <button id="btn" onClick={()=>{speak({text:"Hi! I am vAIdya, what is your name?"})}}>TAlk to vAIdya</button><br/>
      <input type="text" placeholder="your name" onBlur={(e)=>{speak({text:`Nice to meet you ${e.target.value}. What is your age?`})}}/><br/>
      <input type="text" placeholder="your age" onBlur={(e)=>{speak({text:`Which Symptoms do you have? Do you have symptoms like itching, joint pain, stomach pain, blister or acidity etc? For more symptoms you can check the list given here.`}); setTimeout(()=>{SpeechRecognition.startListening()},12000)}}/><br/>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <button onClick={()=>{handle(transcript)}}>Predict the Disease</button>
    </div>
  );
};
export default App;
