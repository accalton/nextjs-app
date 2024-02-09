import { GoogleTagManager } from "@next/third-parties/google";

export default function Analytics() {
    return (
        <>
            {(process.env.GOOGLE_TAG_MANAGER_ID) && (
                <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID} />
            )}
        </>
    );
}