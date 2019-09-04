workflow "deployGithubPage" {
  on = "push"
  resolves = ["deploy"]
}

action "deploy" {
  uses = "../../deploy.sh"
} 

