import Link from "next/link"

import HoneyPotsLogo from "./HoneyPotsLogo"

interface LogoProps {
  inverse?: boolean
  redirectPath?: string
}

const Logo: React.FC<LogoProps> = ({ redirectPath = "/", inverse = false }) => {
  return (
    <Link href={redirectPath}>
      <a className="cursor-pointer text-decoration-none">
        <HoneyPotsLogo colorKey={inverse ? "white" : "black"} />
      </a>
    </Link>
  )
}

export default Logo
