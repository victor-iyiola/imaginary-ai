/**
 * @author Victor I. Afolabi
 *
 * A.I. Engineer & Software developer
 * javafolabi@gmail.com
 *
 * Created on 02 February, 2018 @ 1:22 AM.
 * Copyright © 2018. Victor. All rights reserved.
 */


import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ImageClassification from './ImageClassification';
import GenerativeModels from './GenerativeModels';
import ImageSearch from './ImageSearch';
import AIArticles from './AIArticles';
import AutoEncoding from './AutoEncoding';
import ReinforcementLearning from './ReinforcementLearning';

import ProjectsIndex from "./ProjectsIndex";

const Projects = (props) =>
  <Switch>
    <Route exact path={props.match.url}
           render={() => <ProjectsIndex {...props}/>}/>
    {/* Projects */}
    <Route path={`${props.match.path}/image-classification`}
           render={(props) => <ImageClassification {...props} />}/>
    <Route path={`${props.match.path}/generative-models`}
           render={(props) => <GenerativeModels {...props} />}/>
    <Route path={`${props.match.path}/image-search`}
           render={(props) => <ImageSearch {...props}/>}/>
    <Route path={`${props.match.path}/ai-articles`}
           render={(props) => <AIArticles {...props}/>}/>
    <Route path={`${props.match.path}/auto-encoding`}
           render={(props) => <AutoEncoding {...props}/>}/>
    <Route path={`${props.match.path}/reinforcement-learning`}
           render={(props) => <ReinforcementLearning {...props}/>}/>
  </Switch>;

export default Projects;
