from llama_index.core.workflow import StartEvent, StopEvent, Workflow, step


class MyWorkflow(Workflow):
    """A custom workflow class that inherits from the base Workflow.

    This workflow implements a single step that returns a "Hello, world!" message.
    The single step workflow receives a StartEvent and returns a StopEvent with the result.
    """

    @step
    async def my_step(self, ev: StartEvent) -> StopEvent:
        # do something here
        return StopEvent(result="Hello, world!")


async def main():
    w = MyWorkflow(timeout=10, verbose=False)
    result = await w.run()
    print(result)


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
