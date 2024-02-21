import { Icon } from '@iconify/react'

export default function Stars({ css, amount = 5 }) {
  return (
    <div>{[...Array(amount)].map((_, i) => <Icon className={css} icon="ion:star" width="23" height="23" key={i} />)}</div>
  )
}
