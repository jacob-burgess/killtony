/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as StreamingIndexImport } from './routes/streaming/index'
import { Route as SearchIndexImport } from './routes/search/index'
import { Route as EpisodesIndexImport } from './routes/episodes/index'
import { Route as EpisodesYoutubeIdImport } from './routes/episodes/$youtubeId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StreamingIndexRoute = StreamingIndexImport.update({
  path: '/streaming/',
  getParentRoute: () => rootRoute,
} as any)

const SearchIndexRoute = SearchIndexImport.update({
  path: '/search/',
  getParentRoute: () => rootRoute,
} as any)

const EpisodesIndexRoute = EpisodesIndexImport.update({
  path: '/episodes/',
  getParentRoute: () => rootRoute,
} as any)

const EpisodesYoutubeIdRoute = EpisodesYoutubeIdImport.update({
  path: '/episodes/$youtubeId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/episodes/$youtubeId': {
      id: '/episodes/$youtubeId'
      path: '/episodes/$youtubeId'
      fullPath: '/episodes/$youtubeId'
      preLoaderRoute: typeof EpisodesYoutubeIdImport
      parentRoute: typeof rootRoute
    }
    '/episodes/': {
      id: '/episodes/'
      path: '/episodes'
      fullPath: '/episodes'
      preLoaderRoute: typeof EpisodesIndexImport
      parentRoute: typeof rootRoute
    }
    '/search/': {
      id: '/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchIndexImport
      parentRoute: typeof rootRoute
    }
    '/streaming/': {
      id: '/streaming/'
      path: '/streaming'
      fullPath: '/streaming'
      preLoaderRoute: typeof StreamingIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/episodes/$youtubeId': typeof EpisodesYoutubeIdRoute
  '/episodes': typeof EpisodesIndexRoute
  '/search': typeof SearchIndexRoute
  '/streaming': typeof StreamingIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/episodes/$youtubeId': typeof EpisodesYoutubeIdRoute
  '/episodes': typeof EpisodesIndexRoute
  '/search': typeof SearchIndexRoute
  '/streaming': typeof StreamingIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/episodes/$youtubeId': typeof EpisodesYoutubeIdRoute
  '/episodes/': typeof EpisodesIndexRoute
  '/search/': typeof SearchIndexRoute
  '/streaming/': typeof StreamingIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/episodes/$youtubeId'
    | '/episodes'
    | '/search'
    | '/streaming'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/episodes/$youtubeId' | '/episodes' | '/search' | '/streaming'
  id:
    | '__root__'
    | '/'
    | '/episodes/$youtubeId'
    | '/episodes/'
    | '/search/'
    | '/streaming/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  EpisodesYoutubeIdRoute: typeof EpisodesYoutubeIdRoute
  EpisodesIndexRoute: typeof EpisodesIndexRoute
  SearchIndexRoute: typeof SearchIndexRoute
  StreamingIndexRoute: typeof StreamingIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  EpisodesYoutubeIdRoute: EpisodesYoutubeIdRoute,
  EpisodesIndexRoute: EpisodesIndexRoute,
  SearchIndexRoute: SearchIndexRoute,
  StreamingIndexRoute: StreamingIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/episodes/$youtubeId",
        "/episodes/",
        "/search/",
        "/streaming/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/episodes/$youtubeId": {
      "filePath": "episodes/$youtubeId.tsx"
    },
    "/episodes/": {
      "filePath": "episodes/index.tsx"
    },
    "/search/": {
      "filePath": "search/index.tsx"
    },
    "/streaming/": {
      "filePath": "streaming/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
