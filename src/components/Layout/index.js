/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import "./normalize.css"

const styles = theme => ({
  base: {
    background: theme.color.ui[100],
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  wrapper: {
    width: "100%",
    maxWidth: 1000,
    padding: 24
  }
})

export const Layout = ({ children }) => {
  const theme = useTheme();
  const { base, wrapper } = styles(theme);
  
  return (
    <div css={base}>
      <div css={wrapper}>
        {children}
      </div>
    </div>
  );
};
