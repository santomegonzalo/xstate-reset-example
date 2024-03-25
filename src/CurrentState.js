import { MyMachineContext } from "./machine.state"

export const CurrentState = () => {
  const actorRef = MyMachineContext.useActorRef();
  const currentState = MyMachineContext.useSelector((s) => s.value);

  return (
    <div>
      <p>Current Machine State: {currentState}</p>

      <div>
        <button onClick={() => {
          actorRef.send({
            type: 'reset',
          })
        }}>Reset</button>
        <button onClick={() => {
          actorRef.send({
            type: 'starting'
          })
        }}>Move to Starting</button>
        <button onClick={() => {
          actorRef.send({
            type: 'success'
          })
        }}>Move to Success</button>
      </div>
    </div>
  )
}
