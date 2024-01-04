import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function GithubButton() {
  return (
    <div>
      <form action="https://github.com/hysasuke/Project-Hub" target="_blank">
        <Button
          type="submit"
          variant="contained"
          color="github"
          style={{ height: 30, marginLeft: 10 }}
        >
          <Image src="/github.png" width={20} height={20} />
        </Button>
      </form>
    </div>
  );
}
