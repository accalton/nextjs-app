import Link from "next/link";

const links = [
    {name: "Home", href: "/"},
    {name: "Gallery", href: "/gallery"}
];

export default function Navigation() {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                >
                    <span>{link.name}</span>
                </Link>
            ))}
        </>
    );
}