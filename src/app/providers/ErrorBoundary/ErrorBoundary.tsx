import React, { ErrorInfo, ReactNode, Suspense } from 'react';

import { ErrorPage } from '#/pages/ErrorPage/ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundary {
  hasError: boolean;
}

class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, IErrorBoundary> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Suspense fallback=""><ErrorPage /></Suspense>;
    }

    return <>{children}</>;
  }
}

export default ErrorBoundary;
