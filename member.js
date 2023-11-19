function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/skills.html',
    controller: 'MemberCtrl',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}