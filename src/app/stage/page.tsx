"use client";

import { Group } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoArrowBack, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { NavigationButton } from "@/components/NavigationButton";
import { StageBackground } from "@/components/StageBackground";
import { StageButton } from "@/components/StageButton";
import { StageTitleBanner } from "@/components/StageTitleBanner";
import styles from "./page.module.css";

const STAGES_PER_PAGE = 4;
const TOTAL_STAGES = 8;

type StageData = {
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  isLocked: boolean;
  stars: 0 | 1 | 2 | 3;
};

const initialStages: StageData[] = [
  { number: 1, isLocked: false, stars: 2 },
  { number: 2, isLocked: false, stars: 0 },
  { number: 3, isLocked: true, stars: 0 },
  { number: 4, isLocked: true, stars: 0 },
  { number: 5, isLocked: true, stars: 0 },
  { number: 6, isLocked: true, stars: 0 },
  { number: 7, isLocked: true, stars: 0 },
  { number: 8, isLocked: true, stars: 0 },
];

export default function StagePage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_STAGES / STAGES_PER_PAGE);

  const startIndex = (currentPage - 1) * STAGES_PER_PAGE;
  const endIndex = startIndex + STAGES_PER_PAGE;
  const currentStages = initialStages.slice(startIndex, endIndex);

  const handleStageClick = (stageNumber: number) => {
    // バトルページへの遷移など
    console.log(`Stage ${stageNumber} clicked`);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <StageBackground>
      <div className={styles.container}>
        <div className={styles.topNav}>
          <NavigationButton
            icon={IoArrowBack}
            aria-label="戻る"
            onClick={() => {
              router.push("/");
            }}
          />
        </div>

        <div className={styles.titleSection}>
          <StageTitleBanner title="ステージセレクト" />
        </div>

        <div className={styles.stagesSection}>
          <Group gap="md" justify="center">
            {currentStages.map((stage) => (
              <StageButton
                key={stage.number}
                stageNumber={stage.number}
                isLocked={stage.isLocked}
                stars={stage.stars}
                onClick={() => handleStageClick(stage.number)}
              />
            ))}
          </Group>
        </div>

        <div className={styles.paginationSection}>
          <NavigationButton
            icon={IoChevronBack}
            aria-label="前のページ"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          />
          <NavigationButton
            icon={IoChevronForward}
            aria-label="次のページ"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          />
        </div>
      </div>
    </StageBackground>
  );
}
