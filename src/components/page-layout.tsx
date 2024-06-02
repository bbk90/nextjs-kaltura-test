import Link from "next/link";
import KalturaPlayer from "./kaltura-player";

export default function PageLayout({
  title,
  content,
  home,
}: {
  title: string;
  content: string;
  home: boolean;
}) {
  return (
    <div>
      <p style={{ fontSize: 32 }}>{title}</p>
      <p style={{ fontSize: 22 }}>{content}</p>
      <KalturaPlayer />
      {home ? (
        <Link href={"/news"}>To news page</Link>
      ) : (
        <Link href={"/"}>To back to home</Link>
      )}
    </div>
  );
}
