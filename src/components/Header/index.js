/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    marginBottom: 0,
    color: theme.color.text.primary,
  },
  subtitle: {
    color: theme.color.text.secondary
  }
});

export const Header = ({ toggleTheme }) => {
  const theme = useTheme();
  const { container, title, subtitle } = styles(theme);

  return (
    <div css={container}>
      <div>
        <h1 css={title}>Social Media Dashboard</h1>
        <h2 css={subtitle}>Total follower: 23,004</h2>
      </div>
      <button onClick={toggleTheme}>Toggle goes here</button>
    </div>
  );
};