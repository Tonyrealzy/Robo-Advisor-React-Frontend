import React from "react";
import { useFormQuestions } from "../../hooks/useFormQuestions";
import { FormQuestionsData, QuestionName } from "../../models/FormQuestions";
import MiniLoader from "../loader/MiniLoader";
import { useNavigate } from "react-router-dom";

const DynamicForm: React.FC = () => {
  const navigate = useNavigate();
  const { errors, isSubmitting, register, handleSubmit } = useFormQuestions();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full overflow-y-auto w-full gap-4 justify-center items-center"
    >
      <section
        className="w-[70%] flex flex-col gap-y-2 items-start justify-center"
        style={{ margin: "50px auto 0" }}
      >
        {FormQuestionsData.map((question) => (
          <div key={question.id} className="w-full">
            <label className="font-[12px] w-f">
              {question.id + ". " + question.text}
            </label>

            {question.options.length === 1 &&
            question.options[0].value === "" ? (
              <input
                type={question.id === 8 ? "text" : "number"}
                {...register(question.name as QuestionName, {
                  required: true,
                  valueAsNumber: question.id === 8 ? false : true,
                })}
                placeholder={question.options[0].label}
                className="border border-primary outline-none h-10 w-full rounded-md text-xs"
                style={{ padding: "12px" }}
              />
            ) : (
              <select
                {...register(question.name as QuestionName, { required: true })}
                className="border border-primary outline-none h-10 w-full rounded-md text-xs"
                style={{ padding: "12px" }}
              >
                <option value="" disabled selected className="text-xs">
                  -- Select an option --
                </option>
                {question.options.map((option) => (
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

            <span className="flex flex-col">
              {errors.age && (
                <span className="text-red-500 text-sm">
                  {errors.age.message}
                </span>
              )}
              {errors.amount && (
                <span className="text-red-500 text-sm">
                  {errors.amount.message}
                </span>
              )}
              {errors.currency && (
                <span className="text-red-500 text-sm">
                  {errors.currency.message}
                </span>
              )}
              {errors.investmentHorizon && (
                <span className="text-red-500 text-sm">
                  {errors.investmentHorizon.message}
                </span>
              )}
              {errors.investmentKnowledge && (
                <span className="text-red-500 text-sm">
                  {errors.investmentKnowledge.message}
                </span>
              )}
              {errors.investmentPurpose && (
                <span className="text-red-500 text-sm">
                  {errors.investmentPurpose.message}
                </span>
              )}
              {errors.location && (
                <span className="text-red-500 text-sm">
                  {errors.location.message}
                </span>
              )}
              {errors.riskTolerance && (
                <span className="text-red-500 text-sm">
                  {errors.riskTolerance.message}
                </span>
              )}
            </span>
          </div>
        ))}
      </section>

      <aside className="flex">
        <button
          onClick={() => navigate("/dashboard")}
          className="font-bold text-primary bg-firstgold text-[10px] h-10 w-28 md:w-40 rounded-lg"
          style={{ margin: "5px" }}
        >
          CANCEL
        </button>
        <button
          type="submit"
          className="flex font-bold justify-center items-center bg-primary text-[10px] text-firstgold h-10 w-28 md:w-40 rounded-lg"
          style={{ margin: "5px" }}
        >
          {isSubmitting ? <MiniLoader /> : "SUBMIT"}
        </button>
      </aside>
    </form>
  );
};

export default DynamicForm;
