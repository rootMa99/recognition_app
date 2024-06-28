import { act } from "react";

export const USERS = [
  { role: "fa", userName: "fa", token: "xxx.yyy.zzz" },
  { role: "cutting", userName: "cutting", token: "xxx.yyy.zzz" },
  { role: "root", userName: "root", token: "xxx.yyy.zzz" },
];

export const BESTCREW = [
  {
    month: "january",
    data: [
      {
        crew: "k05C",
        efficiency: { act: 94, target: 84 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k01A",
        efficiency: { act: 85, target: 75 },
        abs: { act: "3%", target: "5%" },
        cc: { act: 4, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k01B",
        efficiency: { act: 88, target: 78 },
        abs: { act: "2%", target: "4%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k04C",
        efficiency: { act: 90, target: 80 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k05B",
        efficiency: { act: 85, target: 80 },
        abs: { act: "4%", target: "5%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
    ],
  },
  {
    month: "february",
    data: [
      {
        crew: "k03C",
        efficiency: { act: 90, target: 80 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k02A",
        efficiency: { act: 87, target: 77 },
        abs: { act: "3%", target: "5%" },
        cc: { act: 4, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k04B",
        efficiency: { act: 88, target: 78 },
        abs: { act: "2%", target: "4%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k02B",
        efficiency: { act: 89, target: 79 },
        abs: { act: "2%", target: "4%" },
        cc: { act: 4, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k02C",
        efficiency: { act: 91, target: 81 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
    ],
  },
  {
    month: "march",
    data: [
      {
        crew: "k02C",
        efficiency: { act: 91, target: 81 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k03A",
        efficiency: { act: 86, target: 76 },
        abs: { act: "2%", target: "5%" },
        cc: { act: 4, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k03B",
        efficiency: { act: 88, target: 78 },
        abs: { act: "2%", target: "4%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k03C",
        efficiency: { act: 90, target: 80 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k05A",
        efficiency: { act: 90, target: 80 },
        abs: { act: "2%", target: "5%" },
        cc: { act: 3, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
    ],
  },
  {
    month: "april",
    data: [
      {
        crew: "k05A",
        efficiency: { act: 90, target: 80 },
        abs: { act: "2%", target: "5%" },
        cc: { act: 3, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "R04A",
        efficiency: { act: 89, target: 79 },
        abs: { act: "3%", target: "5%" },
        cc: { act: 4, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "X04B",
        efficiency: { act: 92, target: 82 },
        abs: { act: "2%", target: "4%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k04C",
        efficiency: { act: 94, target: 84 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k03C",
        efficiency: { act: 90, target: 80 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
    ],
  },
  {
    month: "may",
    data: [
      {
        crew: "k03A",
        efficiency: { act: 86, target: 76 },
        abs: { act: "2%", target: "5%" },
        cc: { act: 4, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "k05A",
        efficiency: { act: 90, target: 80 },
        abs: { act: "2%", target: "5%" },
        cc: { act: 3, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "R05B",
        efficiency: { act: 85, target: 80 },
        abs: { act: "4%", target: "5%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "B01C",
        efficiency: { act: 88, target: 78 },
        abs: { act: "3%", target: "4%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
      {
        crew: "X03C",
        efficiency: { act: 90, target: 80 },
        abs: { act: "1%", target: "3%" },
        cc: { act: 5, target: 5 },
        dailyKaizen: { act: "100%", target: "100%" },
      },
    ],
  },
];
