/**
 * Composes the plugin-owned Calendar view with the shared shell navigation
 * primitive. Calendar owns its route chrome; the app shell only mounts the
 * registered plugin surface.
 */

import { PluginPageFrame } from "@elizaos/ui/components";
import type { JSX } from "react";
import { SimpleCalendarView } from "./SimpleCalendarView.tsx";

export function CalendarPage(): JSX.Element {
  return (
    <PluginPageFrame title="Calendar" safeAreaTop>
      <SimpleCalendarView />
    </PluginPageFrame>
  );
}
