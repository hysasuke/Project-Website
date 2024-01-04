import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function PaypalDonateButton() {
  return (
    <div>
      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="hosted_button_id" value="DGSX5M5QZUJZ4" />
        <Button
          type="submit"
          variant="contained"
          color="donation"
          style={{ height: 30, justifyContent: "center", alignItems: "center" }}
        >
          <Image src="/paypal.png?timestamp=asdf" width={15} height={20} />
        </Button>
      </form>
    </div>
  );
}
