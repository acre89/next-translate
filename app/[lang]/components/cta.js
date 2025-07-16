export default function CTA(props) {
  const t = props.dict;
  return (
    <div className="px-6 sm:px-14 md:px-28 py-7 bg-secondary w-full h-fit">
      <div className="3xl:w-[1536px] 3xl:m-auto">
        <p>
          <span className="font-bold">{t.titre}</span>
          <br />
          {t.text}
        </p>
        <div className="flex justify-center">
          <a href="/contact">
            <button className="contact-button pt-7 text-lg ">
              <div className="flex flex-row gap-4 px-4 py-2.5 items-center border border-black">
                <p>{t.button}</p>
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Arrow"
                    className="arrow"
                    d="M8.70721 8.70711C9.09773 8.31658 9.09773 7.68342 8.70721 7.29289L2.34325 0.928932C1.95272 0.538408 1.31956 0.538408 0.929032 0.928932C0.538508 1.31946 0.538508 1.95262 0.929032 2.34315L6.58589 8L0.929032 13.6569C0.538508 14.0474 0.538508 14.6805 0.929032 15.0711C1.31956 15.4616 1.95272 15.4616 2.34325 15.0711L8.70721 8.70711ZM8 9H8.0001V7H8V9Z"
                    fill="black"
                  />
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
