import activity from "@/assets/icons/activity.png";
import add from "@/assets/icons/add.png";
import adobe from "@/assets/icons/adobe.png";
import back from "@/assets/icons/back.png";
import canva from "@/assets/icons/canva.png";
import claude from "@/assets/icons/claude.png";
import dropbox from "@/assets/icons/dropbox.png";
import figma from "@/assets/icons/figma.png";
import github from "@/assets/icons/github.png";
import googleOne from "@/assets/icons/google-one.png";
import grammarly from "@/assets/icons/grammarly.png";
import home from "@/assets/icons/home.png";
import icloud from "@/assets/icons/icloud.png";
import medium from "@/assets/icons/medium.png";
import menu from "@/assets/icons/menu.png";
import netflixo from "@/assets/icons/netflixo.png";
import notion from "@/assets/icons/notion.png";
import openai from "@/assets/icons/openai.png";
import plus from "@/assets/icons/plus.png";
import setting from "@/assets/icons/setting.png";
import slack from "@/assets/icons/slack.png";
import spotify from "@/assets/icons/spotify.png";
import vercel from "@/assets/icons/vercel.png";
import wallet from "@/assets/icons/wallet.png";
import youtubePremium from "@/assets/icons/youtube-premium.png";
import zoomLogo from "@/assets/icons/zoom-logo.png";

export const icons = {
  home,
  wallet,
  setting,
  activity,
  add,
  back,
  menu,
  plus,
  notion,
  dropbox,
  openai,
  adobe,
  medium,
  figma,
  spotify,
  github,
  claude,
  canva,
  netflixo,
  youtubePremium,
  icloud,
  googleOne,
  slack,
  zoomLogo,
  vercel,
  grammarly,
} as const;

export type IconKey = keyof typeof icons;
