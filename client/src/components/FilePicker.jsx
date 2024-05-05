import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload Image
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No image selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type={"outline"}
          onClick={() => readFile("logo")}
          className={"text-xs"}
        >
          Logo
        </CustomButton>
        <CustomButton
          type={"filled"}
          onClick={() => readFile("full")}
          className={"text-xs"}
        >
          Full
        </CustomButton>
      </div>
    </div>
  );
};

export default FilePicker;
