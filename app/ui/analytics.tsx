import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function Analytics() {
    return (
        <>
            {(process.env.GOOGLE_TAG_MANAGER_ID) && (
                <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID} />
            )}

            <Script src="/test.js" strategy="afterInteractive" />
        </>
    );
}