import "../../styles/custom/wakttu.css";

export default function Wakttu() {
  return (
    <main className="font-ko flex h-screen w-screen items-center justify-center bg-white/60">
      <section className="flex flex-col items-center gap-6 rounded-2xl border border-[#dddddd] bg-white px-14 py-9">
        <img
          src="https://r2.wakttu.kr/assets/icons/small-logo.svg"
          className="size-16"
          width={64}
          height={64}
          alt="왁뚜 로고"
        />

        <div className="inline-flex flex-col items-center gap-3">
          <h1 className="text-[28px] font-semibold text-[#272727]">
            게임 접속 대기 중이에요.
          </h1>

          <h2 className="font-medium text-[#666666]">
            잠시만 기다리면 자동으로 입장돼요.
          </h2>
        </div>

        <span className="text-center text-sm font-medium text-[#969696]">
          ※ 접속하신 순서대로 게임에 입장되고,
          <br />
          새로고침 하면 대기시간이 더 길어질 수 있어요.
        </span>

        <progress value={0.5} />

        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#dddddd] bg-[#f7f7f7] px-10 py-4">
          <div className="inline-flex items-center justify-between self-stretch">
            <span className="text-center text-sm font-medium text-black">
              현재 대기 인원
            </span>
            <span className="text-center text-sm font-semibold text-[#00bfa3]">
              10915명
            </span>
          </div>

          <div className="inline-flex items-center justify-between self-stretch">
            <span className="text-center text-sm font-medium text-black ">
              예상 대기시간
            </span>
            <span className="text-center text-sm font-semibold text-[#00bfa3]">
              46분 58초
            </span>
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-1.5">
          <span className="font-medium text-[#666666]">기다리는 동안</span>

          <a
            href="https://toy.wakttu.kr/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-start gap-1"
          >
            <span className="font-medium text-[#00bfa3]">이거 해보실래요?</span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="#00BFA3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3081_4788)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7803 8.46976C11.9209 8.61041 11.9999 8.80114 11.9999 9.00001C11.9999 9.19889 11.9209 9.38962 11.7803 9.53026L7.53751 13.773C7.46833 13.8446 7.38557 13.9018 7.29407 13.9411C7.20256 13.9804 7.10415 14.0011 7.00456 14.002C6.90498 14.0028 6.80622 13.9838 6.71405 13.9461C6.62188 13.9084 6.53814 13.8527 6.46772 13.7823C6.3973 13.7119 6.34161 13.6282 6.3039 13.536C6.26619 13.4438 6.24721 13.345 6.24808 13.2455C6.24894 13.1459 6.26963 13.0475 6.30894 12.956C6.34824 12.8645 6.40538 12.7817 6.47701 12.7125L10.1895 9.00001L6.47701 5.28751C6.34039 5.14606 6.2648 4.95661 6.26651 4.75996C6.26822 4.56331 6.34709 4.37521 6.48615 4.23615C6.6252 4.09709 6.81331 4.01822 7.00996 4.01651C7.20661 4.0148 7.39606 4.09039 7.53751 4.22701L11.7803 8.46976Z"
                />
              </g>

              <defs>
                <clipPath id="clip0_3081_4788">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
