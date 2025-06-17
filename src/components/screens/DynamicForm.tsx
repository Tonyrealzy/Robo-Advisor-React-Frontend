import React, { useState } from "react";
import { useFormQuestions } from "../../hooks/useFormQuestions";
import { FormQuestionsData, QuestionName } from "../../models/FormQuestions";
import MiniLoader from "../loader/MiniLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DynamicForm: React.FC = () => {
  const navigate = useNavigate();
  const { errors, isSubmitting, register, trigger, handleSubmit } =
    useFormQuestions();

  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = FormQuestionsData.length;
  const currentQuestion = FormQuestionsData[currentStep];

  const onPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onNext = async () => {
    const isValid = await trigger(currentQuestion.name as QuestionName);

    if (!isValid) {
      toast.error("Please fill out or select an answer before proceeding.");
      return;
    }

    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full gap-y-4 justify-center items-center"
      style={{ padding: "20px" }}
    >
      <section className="flex flex-col gap-y-4 justify-start w-[80%] items-center">
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-primary h-full rounded transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <div key={currentQuestion.id} className="w-full text-[12px]">
          <label className="w-full">
            {currentQuestion.id + ". " + currentQuestion.text}
          </label>

          {currentQuestion.options.length === 1 &&
          currentQuestion.options[0].value === "" ? (
            <input
              type={currentQuestion.id === 8 ? "text" : "number"}
              {...register(currentQuestion.name as QuestionName, {
                required: true,
                valueAsNumber: currentQuestion.id === 8 ? false : true,
              })}
              placeholder={currentQuestion.options[0].label}
              className="border border-primary outline-none h-10 w-full rounded-md text-xs"
              style={{ padding: "12px" }}
              disabled={isSubmitting}
            />
          ) : (
            <select
              {...register(currentQuestion.name as QuestionName, {
                required: true,
              })}
              className="border border-primary outline-none h-10 w-full rounded-md text-xs"
              style={{ padding: "12px" }}
              disabled={isSubmitting}
            >
              <option value="" disabled selected className="text-xs">
                -- Select an option --
              </option>
              {currentQuestion.options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-xs"
                >
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </section>

      <aside className="flex">
        {currentStep > 0 ? (
          <button
            onClick={onPrevious}
            className="font-bold text-primary bg-firstgold text-[10px] h-10 w-28 md:w-40 rounded-lg"
            style={{ margin: "5px" }}
          >
            PREVIOUS
          </button>
        ) : (
          <button
            onClick={() => navigate("/dashboard")}
            className="font-bold text-primary bg-firstgold text-[10px] h-10 w-28 md:w-40 rounded-lg"
            style={{ margin: "5px" }}
          >
            CANCEL
          </button>
        )}

        {currentStep === totalSteps - 1 ? (
          <button
            type="submit"
            className="flex font-bold justify-center items-center bg-primary text-[10px] text-firstgold h-10 w-28 md:w-40 rounded-lg"
            style={{ margin: "5px" }}
          >
            {isSubmitting ? <MiniLoader /> : "SUBMIT"}
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex font-bold justify-center items-center bg-primary text-[10px] text-firstgold h-10 w-28 md:w-40 rounded-lg"
            style={{ margin: "5px" }}
          >
            NEXT
          </button>
        )}
      </aside>
    </form>
  );
};

export default DynamicForm;
