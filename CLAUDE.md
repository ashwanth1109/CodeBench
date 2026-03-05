# CodeBench Project Rules

## AWS

- **Always** use the `codebench` named profile for all AWS CLI and SAM commands (e.g., `--profile codebench`).
- SAM app lives in `infra/` — deploy with `sam deploy --profile codebench` from that directory.
- Region: `us-east-1`.
