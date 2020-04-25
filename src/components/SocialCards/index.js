/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { config } from "./config";
import { SocialCard } from "./SocialCard";

const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
});

export const SocialCards = () => {
  const theme = useTheme();
  const { container } = styles(theme);

  return (
    <div css={container}>
      {config.map(platform => (
        <SocialCard
          borderColor={theme.color.social[platform.name]}
          icon={platform.icon}
          acctName={platform.acctName}
          followers={platform.followers}
          today={platform.today}
        />
      ))}
    </div>
  );
};