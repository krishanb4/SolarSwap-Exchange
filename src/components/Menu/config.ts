import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://solarswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://solarswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://solarswap.finance/pools',
  },
  /*
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://solarswap.finance/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://solarswap.finance/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://solarswap.finance/competition',
    status: {
      text: 'CLAIM',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://solarswap.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://solarswap.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://solarswap.finance/profile',
      },
    ],
  },
  */
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://solarswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://solarswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://solarswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://solarswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://solarswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.solarswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.solarswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/solarswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.solarswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://solarswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://solarswap.creator-spring.com/',
      },
    ],
  },
]

export default config
