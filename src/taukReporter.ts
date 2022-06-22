import type { Reporters } from '@wdio/types';
import WDIOReporter, {
    RunnerStats, SuiteStats, TestStats,
    BeforeCommandArgs, AfterCommandArgs, CommandArgs, Argument
} from '@wdio/reporter';

class TaukReporter extends WDIOReporter {

    constructor(options: Partial<Reporters.Options>) {
        options = Object.assign(options, { stdout: true });
        super(options);
    }

    onRunnerStart(runnerStats: RunnerStats): void {
        this.write(`[DEBUG] The runner has started with a CID of "${runnerStats.cid}"! \n`);
    }

    onSuiteStart(suiteStats: SuiteStats): void {
        this.write(`[DEBUG] The suite "${suiteStats.title}" has started! \n`);
    }

    onTestStart(testStats: TestStats): void {
        this.write(`[DEBUG] The test "${testStats.title}" has started! \n`);
    }

    onTestPass(testStats: TestStats): void {
        this.write(`[DEBUG] The test "${testStats.title}" has passed! \n`);
    }

    onTestFail(testStats: TestStats): void {
        this.write(`[DEBUG] The test "${testStats.title}" has failed! \n`);
    }

    onTestSkip(testStats: TestStats): void {
        this.write(`[DEBUG] The test "${testStats.title}" was skipped. \n`);
    }

    onTestEnd(testStats: TestStats): void {
        this.write(`[DEBUG] The test "${testStats.title}" has ended. \n`);
    }

    onSuiteEnd(suiteStats: SuiteStats): void {
        this.write(`[DEBUG] The suite "${suiteStats.title}" has ended! \n`);
    }

    onRunnerEnd(runnerStats: RunnerStats): void {
         this.write(`[DEBUG] The runner with a CID of "${runnerStats.cid}" has completed! \n`);
    }

}

export default TaukReporter;
