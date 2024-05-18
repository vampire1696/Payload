import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const navItems = footer?.navItems || []
  return (
    <div className={classes.footer}>
      <Gutter>
        <div className={classes.wrap}>
          <Link href="/">
            <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
          </Link>
          <p>Global Engineering Academy</p>

          <div className={classes.socialLinks}>
            {navItems.map(item => {
              const icon = item?.link?.icon as Media
              return (
                <a href={item.link.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icon?.url}
                    alt={item.link.label}
                    width={24}
                    height={24}
                    className={classes.socialIcon}
                  />
                </a>
              )
            })}
          </div>
        </div>
      </Gutter>
    </div>
  )
}

export default FooterComponent
