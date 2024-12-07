# React Router v6 useParams Hook Bug

This repository demonstrates a common bug encountered when using the `useParams` hook in React Router v6. The bug arises from an incorrect usage of the hook, leading to an undefined `params` object.

## Bug Description

The `useParams` hook is used to access route parameters. However, if not used correctly within a component, it returns `undefined` instead of the expected parameter values. This often leads to errors and unexpected behavior in the application.

## Solution

The solution involves ensuring that the `useParams` hook is used correctly within the component that needs to access the route parameters. In this case, importing and using the hook inside the User component resolves the issue.