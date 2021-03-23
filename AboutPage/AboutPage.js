import React from 'react'
import AboveTheFold from './AboveTheFold'
import Explainer from './Explainer'
import Team from './Team'


export default function AboutPage(){
    return (
        <div><h1>About Page</h1><div>Above the fold<AboveTheFold /></div><div>Explainer Section<Explainer /></div><div>Team<Team /></div></div>
    )
}