from llama_index.core.workflow import Event, StartEvent, StopEvent, Workflow, step
import random


class ProcessingEvent(Event):
    """To connect multiple steps, create custom events that carry data between steps.
    To do so, we need to add an Event that is passed between the steps and
    transfers the output of the first step to the second step.
    """

    intermediate_result: str


class LoopEvent(Event):
    loop_output: str


class MultiStepWorkflow(Workflow):
    """A workflow that processes data in multiple steps.

    This workflow demonstrates a two-step processing pipeline where:
    1. The first step processes initial data and produces an intermediate result
    2. The second step uses the intermediate result to produce the final output

    Inherits from the base Workflow class to handle execution flow and timing.
    """

    @step
    async def step_one(self, ev: StartEvent | LoopEvent) -> ProcessingEvent | LoopEvent:
        if random.randint(0, 1) == 0:
            print("Bad thing happened")
            return LoopEvent(loop_output="Back to step one.")
        else:
            print("Good thing happened")
            return ProcessingEvent(intermediate_result="First step complete.")

    @step
    async def step_two(self, ev: ProcessingEvent) -> StopEvent:
        # Use the intermediate result
        final_result = f"Finished processing: {ev.intermediate_result}"
        return StopEvent(result=final_result)


async def main():
    w = MultiStepWorkflow(timeout=10, verbose=False)
    result = await w.run()
    print(result)


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
