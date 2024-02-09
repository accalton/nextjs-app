import { GoogleAnalytics } from "@next/third-parties/google";

export default function Analytics() {
    return (
        <>
            {(process.env.GOOGLE_ANALYTICS_ID) && (
                <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
            )}
        </>
    );
}