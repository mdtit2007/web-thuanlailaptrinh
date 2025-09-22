import { NotificationCenter } from "../../components/notification-center";

export default function MyComponent() {
  return (
    <NotificationCenter
      variant="popover"
      enableRealTimeUpdates={true}
      updateInterval={30000}
      showFilter={true}
      showMarkAllRead={true}
    />
  )
}