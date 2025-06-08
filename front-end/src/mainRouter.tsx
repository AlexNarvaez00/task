import { Route } from "react-router";
import { getAllFilePages } from "./router/FilePageReader";
import { getRouterTree } from "./router/RouterTree";
import type { JSX } from "react";

type RouteNode = {
    componentPath: string;
    children?: Record<string, RouteNode>;
};

const renderRoutes = (
    tree: Record<string, RouteNode>,
    parentPath = "/",
): JSX.Element[] => {
    return Object.entries(tree).map(([segment, node]) => {
        const routePath = segment.startsWith("[")
            ? `:${segment.slice(1, -1)}`
            : segment;

        const fullPath = routePath === "index" ? "" : routePath;
        const Component = entries[node.componentPath].default;
        const getDependencies = entries[node.componentPath].getDependencies;
        const dependencies = { ...(getDependencies ? getDependencies() : {}) };

        return (
            <Route
                path={fullPath}
                key={node.componentPath}
                element={<Component {...dependencies} />}
            >
                {node.children
                    ? renderRoutes(node.children, parentPath + routePath + "/")
                    : null}
            </Route>
        );
    });
};

const entries = import.meta.glob("./app/**/page.tsx", { eager: true });
const { fileNames } = getAllFilePages(entries);
const routeTree = getRouterTree(fileNames);
const routes = renderRoutes(routeTree);

export default routes;
