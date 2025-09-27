import type { FC } from "react";
import styles from "./index.module.css";

export type CharacterProps = {
    /* キャラクターの画像パス */
  src: string;
  /* 画像のサイズ */
  size: number;
  /* 分割画像のサイズ */
  splitSize: number;
  /* 分割数 */
  split: number;
  /* アニメーション速度（ms）、数字が大きいほどアニメーションが遅くなる */
  speed: number;
}

export const Character: FC<CharacterProps> = ({ src, size, splitSize, split, speed }) => {
  // 総アニメーション時間（フレーム数 × 速度）
  const totalDuration = 4 * speed; // [0,1,2,1] = 4フレーム

  return (
    <div 
      className={styles.character}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className={styles.sprite}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: `${splitSize * split}px ${splitSize}px`,
          width: splitSize,
          height: splitSize,
          animationDuration: `${totalDuration}ms`,
          '--frame-size': `${splitSize}px`,
        } as React.CSSProperties & { '--frame-size': string }}
      />
    </div>
  );
}