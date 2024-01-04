import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function PatreonButton() {
  return (
    <div>
      <form
        action="https://patreon.com/BennyLi?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link"
        method="post"
        target="_blank"
      >
        <Button
          type="submit"
          variant="contained"
          color="patreon"
          style={{ height: 30, marginLeft: 10 }}
        >
          <Image src="/patreon.png" width={80} height={27} />
        </Button>
      </form>
    </div>
  );
}
