'use client'
import { Home, User, Briefcase, FileText, Users } from 'lucide-react'
import { NavBar } from "@/components/tubelight-navbar";

export default function Nav_Bar() {
 const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contests', url: '/contests', icon: Briefcase },
    { name: 'Gallery', url: '/gallery', icon: FileText },
    { name: 'Leaderboard', url: '/leaderboard', icon: FileText },
    { name: 'People', url: '/people', icon: Users },
  ]

  return (
    <NavBar items={navItems} />
  )
}