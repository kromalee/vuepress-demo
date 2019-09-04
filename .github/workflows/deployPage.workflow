workflow "deployPage" {
  on = "push"
  resolves = ["deploy"]
}
action "deploy" {
  uses = "./deploy.sh"
}