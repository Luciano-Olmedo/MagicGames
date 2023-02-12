import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/java-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

const MemoTest = () => {
  const [guessed, setGuessed] = useState<String[]>([]);
  const [selected, setSelected] = useState<String[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);
  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("YOU WIN !!");
      location.reload();
      //location.reload();
    }
  }, [guessed]);

  return (
    <>
      <div className="flex justify-center w-[50%] mx-auto items-center ">
        <button className="text-white text-3xl cursor-pointer ">
          <Link to={"/"}>
            <AiOutlineArrowLeft className="-translate-x-60 translate-y-3" />
          </Link>
        </button>
        <h1 className="text-white text-center text-3xl mt-6 ">MemoBeast</h1>
      </div>

      <ul className="grid grid-cols-5 gap-4 place-items-center w-[50%] mx-auto mt-10">
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              key={url}
              className="cursor-pointer border border-white "
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img alt="icon" src={url} />
              ) : (
                <img
                  alt="icon"
                  src={
                    "https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                  }
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MemoTest;
