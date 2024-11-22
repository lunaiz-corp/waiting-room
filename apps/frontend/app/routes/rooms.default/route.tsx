import { Trans, useTranslation } from "react-i18next";

import "../../styles/custom/default.css";

export const handle = { i18n: "rooms.default" };
export default function Default() {
  const { t } = useTranslation(handle.i18n);

  return (
    <main className="font-ko flex h-screen w-screen items-center justify-center bg-black/30">
      <section className="flex flex-col gap-8 rounded-2xl border border-[#dddddd] bg-white px-10 py-9">
        <div className="inline-flex w-full items-center justify-between">
          <h1 className="text-[21px] font-bold tracking-[-0.63px] text-[#272727]">
            {/* 현재 접속 대기 중입니다. */}
            {t("title")}
          </h1>

          <h2 className="text-right text-base font-medium tracking-[-0.48px] text-[#272727]">
            {/* 예상 대기시간: */}
            {t("estimatedWaitTime")}&nbsp;&nbsp;
            <span className="font-bold underline">85시간 17초</span>
          </h2>
        </div>

        <progress value={0.5} />

        <span className="text-[15px] font-normal leading-6 tracking-[-0.45px] text-[#272727]">
          {/* 고객님 앞에 306017 명, 뒤에 449 명의 대기자가 있습니다. */}
          <Trans
            t={t}
            i18nKey={"description.line1"}
            values={{
              ahead: 306017,
              behind: 449,
            }}
            components={{
              strong: <span className="font-bold underline" />,
            }}
          />

          <br />

          {/* 현재 이용자가 많아 잠시 대기 중이며, 접속하신 순서대로 자동 접속됩니다. */}
          {t("description.line2")}
        </span>

        <span className="-mt-2 text-center font-bold text-[#6977ff]">
          {/* ※ 재 접속, 새로고침하시면 대기시간이 길어질 수 있으니 주의하세요. */}
          {t("caution")}
        </span>
      </section>
    </main>
  );
}
