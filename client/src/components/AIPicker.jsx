import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type={"outline"} className={"text-xs"}>
            Asking AI...
          </CustomButton>
        ) : (
          <>
            <CustomButton
              type={"outline"}
              onClick={() => handleSubmit("logo")}
              className={"text-xs"}
            >
              AI Logo
            </CustomButton>
            <CustomButton
              type={"filled"}
              onClick={() => handleSubmit("full")}
              className={"text-xs"}
            >
              AI Full
            </CustomButton>
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
