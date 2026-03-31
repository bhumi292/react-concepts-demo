import { forwardRef } from "react"

const Custominput = forwardRef((props, ref) => {
    return <input ref={ref} placeholder="child input" />;
});

export default Custominput;