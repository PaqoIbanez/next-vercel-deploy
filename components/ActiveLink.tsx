import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

interface Props {
    'text': string,
    'href': string

}

const style: CSSProperties = {
    opacity: 0.8
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { pathname } = useRouter();

    return (
        <Link href={href} >
            <a style={pathname === href ? style : undefined} > {text} </a>
        </Link>
    )
}
